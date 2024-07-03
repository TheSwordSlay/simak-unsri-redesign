export default function Select({label, options}) {
    return(
        <label className="form-control w-full max-w-xs">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <select className="select select-bordered">
            <option disabled selected>Pilih...</option>
            {options.map((data, i) => {
                return <option key={i}>{data}</option>
            })}
            {/* <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option> */}
        </select>
        </label>
    );
}