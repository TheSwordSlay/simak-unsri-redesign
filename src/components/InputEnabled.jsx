export function InputEnabled({label, placeholder}) {
  return <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
  </label>;
}
  