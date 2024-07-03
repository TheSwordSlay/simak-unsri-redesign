export function InputDisabled({label, value}) {
  return <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <div className="label text-hijau-500">
    <p>{value}</p>
  </div>
  </label>;
}
  