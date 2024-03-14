import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Company } from '../Company';
import { styled } from 'styled-components';
import { FaFilePdf } from 'react-icons/fa';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface CompanyPDFProps {
    companies: Company[];
}

export const GenerateReportButton = styled.button`
    font-size: 16px;
    background-color: #5187F0;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    &:hover {
        background-color: #5187CC;
    }
`;

const CompanyPDF: React.FC<CompanyPDFProps> = ({ companies }) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const tableBody = companies.map((company, index) => {
        const rowStyle = index % 2 === 0 ? 'even-row' : 'odd-row'; 
        return [
            { text: company.id.toString(), style: rowStyle },
            { text: company.cnpj, style: rowStyle },
            { text: company.corporateReason, style: rowStyle },
            { text: company.fantasyName, style: rowStyle }
        ];
    });

    const docDefinition = {
        pageSize: { width: 842, height: 595 },
        pageOrientation: 'landscape',
        footer: {
            columns: [
                { text: formattedDate, alignment: 'center', margin: [0, 10] }
            ]
        },
        content: [
            { text: 'Relatório de Empresas', style: 'header' },
            { text: ' ', margin: [0, 3] },
            {
                table: {
                    headerRows: 1,
                    widths: ['auto', '*', '*', '*'],
                    body: [
                        [
                            { text: 'Código', style: 'boldText' },
                            { text: 'CNPJ', style: 'boldText' },
                            { text: 'Razão Social', style: 'boldText' },
                            { text: 'Nome Fantasia', style: 'boldText' }
                        ],
                        ...tableBody
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center'
            },
            'even-row': {
                fillColor: '#BBD0FA'
            },
            'odd-row': {
                fillColor: '#FFFFFF' 
            }
        }
    };

    const generatePDF = () => {
        pdfMake.createPdf(docDefinition).download('empresas.pdf');
    };

    return (
        <div>
            <GenerateReportButton onClick={generatePDF}>
                <FaFilePdf /> Gerar Relatório em PDF
            </GenerateReportButton>
        </div>
    );
};

export default CompanyPDF;
