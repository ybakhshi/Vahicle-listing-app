import { HStack, Select } from "@chakra-ui/react";

interface Props {
  onConditionChange: (filter: string) => void;
}

const ApplyFilters = ({ onConditionChange }: Props) => {
  return (
    <HStack>
      <Select
        placeholder="Filter by condition"
        onChange={(e) => onConditionChange(e.target.value)}
        mb={4}
      >
        <option value="New">New</option>
        <option value="Used">Used</option>
      </Select>
    </HStack>
  );
};

export default ApplyFilters;
