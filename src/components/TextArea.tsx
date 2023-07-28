import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  value: string;
  loading?: boolean;
  onChange: (value: string) => void;
}

const commonStyles = { border: 0, height: "200px", resize: "none" };

const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Enter text";
  if (loading) return "Translating...";
  return "Translation";
};

const TextArea = ({ type, value, loading, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      value={value}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      autoFocus={type === SectionType.From}
      onChange={handleChange}
    />
  );
};

export default TextArea;
