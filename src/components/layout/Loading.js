import { Button, Spinner } from "flowbite-react";
export default function Loading() {
  return (
    <div className="flex flex-row gap-3">
      <Button color=" primary">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">...در حال بارگزاری </span>
      </Button>
    </div>
  );
}
