interface Prop {
    rows?: number;
    columns?: string
    className?: string
}

const Container = ({rows, columns, className}: Prop) => {
    return (
        <div>
            <table className={className}>
                <tbody>
                {Array.from(Array(rows).keys()).map(() => {
                    return (
                        <tr>
                            {Array.from(Array(columns).keys()).map(() => {
                                return (
                                    <td>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Container;