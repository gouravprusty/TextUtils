export default function Alert({alertMsg}) {
    return (
        alertMsg &&
        <div className={`alert alert-${alertMsg.type === "Success" ? "success" : "warning"} alert-dismissible fade show`} role="alert">
            <b>{alertMsg.type}</b>: { alertMsg.msg}
        </div>
    )
};