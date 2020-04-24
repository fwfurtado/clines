const Row = ({values, onClick = (values) => {return undefined}, ...others}) => (
    <tr key={others.index} onClick={() => onClick(values)}>
        {values.map((value, key) => <td key={key}>{value}</td>)}
    </tr>
);

const Table = ({headers, rows, rowOnClick = undefined, children}) => {

    return (
        <div className="table-area">
            <div className="table-actions">
                {children}
            </div>

            <table>
                <thead>
                <tr>
                    {headers.map((header, key) => <th key={key}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, key) => <Row key={key}  onClick={rowOnClick} index={key} values={row}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;