function CompFun() {
    return (
        <>
            <h2>Functional Components Tutorial</h2>
            <City />

        </>
    )

}

export function Provinces() {
    return (
        <div>
            <h3>Punjab</h3>
            <h3>KPK</h3>
            <h3>Bloachistan</h3>
            <h3>Sindh</h3>

        </div>

    )

}

function City() {
    return (
        <div>
            <h3>Karachi</h3>
            <h3>Lahore</h3>
            <h3>Quetta</h3>
            <h3>Peshawar</h3>

        </div>

    )
}

function sum() {
    return 5 * 5;
}

export const flower="Rose";
export default CompFun;