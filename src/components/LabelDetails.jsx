function LabelDetails({ label, value }) {
  return (
    <div className="space-x-1">
      <span className="font-light text-gray-300">{label}: </span>
      <span className="font-medium text-stone-50">{value} </span>
    </div>
  );
}

export default LabelDetails;
