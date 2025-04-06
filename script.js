function func() {
  alert(arguments.callee.name);
}
func(); 
