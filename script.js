const byteSize = (str) => {
  // write your code here
	
	const byteSize =  new Blob([str]).size;


	return byteSize;  

}; 

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
