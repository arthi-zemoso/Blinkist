import Button from "@material-ui/core/Button";
type buttonprops={
    onClick:any,
    title:string,
    disabled:boolean
}
const ButtonComponent = (props:buttonprops) => {
    
  return (
    <Button variant="contained" onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </Button>
  );
};

export default ButtonComponent;