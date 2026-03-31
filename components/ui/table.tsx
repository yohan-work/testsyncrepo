import React from 'react';

interface TableProps {
  columns: { header: string; accessorKey: string }[];
  data: any[];
}

const Table = ({ columns, data }: TableProps) => (
  <table className="w-full">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.accessorKey} className="p-2 border-b border-zinc-700">{column.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={column.accessorKey} className="p-2 border-b border-zinc-700">{row[column.accessorKey]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;