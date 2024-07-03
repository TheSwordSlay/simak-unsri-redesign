export function InputEnabledDate({label, placeholder}) {
  return <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <input type="date" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
  </label>;
}
  