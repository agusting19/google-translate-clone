import { Form } from "react-bootstrap";
import { SUPORTED_LANGUAGES } from "../constants";
import { FromLanguage, Language } from "../types";

type Props =
  | {
      type: "from";
      value: FromLanguage;
      onChange: (value: FromLanguage) => void;
    }
  | {
      type: "to";
      value: Language;
      onChange: (value: Language) => void;
    };

const LanguageSelector = ({ type, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language);
  };

  return (
    <Form.Select
      aria-label="Select the language"
      onChange={handleChange}
      value={value}
    >
      {type === "from" && <option value="auto">Detect language</option>}
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};

export default LanguageSelector;
