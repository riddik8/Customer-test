import { Button, Input } from "antd";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { FilterDropdownProps } from "antd/es/table/interface";


const Search = ({
  clearFilters,
  setSelectedKeys,
  selectedKeys,
  confirm,
}: FilterDropdownProps) => {
  const { location } = useRouterState();
  const navigate = useNavigate()

  const { pathname } = location;

  return (
    <div style={{ padding: 8 }}>
      <Input
        autoFocus
        placeholder="Search"
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
      />
      <div style={{ marginTop: 8 }}>
        <Button
          style={{ marginRight: 10 }}
          onClick={() => {
            if (clearFilters) {
              clearFilters();
              navigate({ to: pathname });
            }
            confirm();
          }}
        >
          Clear
        </Button>
        <Button type="primary" onClick={() => confirm()}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
