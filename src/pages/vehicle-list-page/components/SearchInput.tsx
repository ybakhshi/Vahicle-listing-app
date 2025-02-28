import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      onSearch(searchInputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          ref={searchInputRef}
          placeholder="Serach vehicles..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
