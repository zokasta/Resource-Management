function checkBox(props) {
  return (
    <div>
        <input type="checkbox" name={props.name} />
        <label className="px-2">{props.title}</label>
    </div>
  );
}
export default checkBox;
