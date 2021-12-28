export const StatItem: React.FC<any> = ({ value, name }) => {
  if (value === "null") value = 0;
  return (
    <div className={`stat-item ${name}`}>
      <strong className={`lead stat-name `}>{`${name}:`}</strong>
      <strong className="lead stat-value">{`${value}/100`}</strong>
    </div>
  );
};
