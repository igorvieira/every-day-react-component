import { ChangeEvent } from "react";
import "./styles.css";

export type InputProps = {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
};

const Input = ({ label, onChange }: InputProps) => (
  <div className="form-item">
    <input className="form-input" type="text" onChange={onChange} required/>
    <label className="form-label" >{label}</label>
  </div>
);

export default Input;
