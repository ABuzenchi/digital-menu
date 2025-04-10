interface AvailabilityToggleProps {
    available: boolean;
    onToggle: () => void;
  }
  
  const AvailabilityToggle = ({ available, onToggle }: AvailabilityToggleProps) => {
    return (
      <label className="flex items-center gap-2 mt-4 text-sm">
        <input
          type="checkbox"
          checked={available}
          onChange={onToggle}
          className="accent-red-600"
        />
        {available ? 'Mark as unavailable' : 'Mark as available'}
      </label>
    );
  };
  
  export default AvailabilityToggle;