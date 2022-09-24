import styles from './style.module.css';

interface Prop {
    rows?: string | number;
    columns?: string | number;
    className?: string;
}

const store = [
    {
        keyY: "Y",
        keyX: "X"
    },
]

const Container = ({rows, columns, className}: Prop) => {
    return (
        <div>
            <table className={className}>
                <tbody>
                {Array.from(Array(rows).keys()).map((e, i) => {
                    return (
                        <tr className={styles.letter}>
                            {store[i]?.keyY}
                            {Array.from(Array(columns).keys()).map((e, i) => {
                                return (
                                    <td className={styles.letter}>
                                        {store[i]?.keyX}
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