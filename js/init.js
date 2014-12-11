  var tid = setInterval(three_dimenions, 2500);
   
  function classReg( className ) {
	return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
	 var nextTag = document.getElementById('changer').getElementsByTagName('li'),
	  		numberOfTags  = nextTag.length;   
   var i = 0;
   function three_dimenions() {
     
	  nextTag[i].className = nextTag[i].className.replace( classReg( 'active' ) , ' bye-bye' );
      setTimeout(function(){
        n = i -1;
		if( i == 0 ){ n = 4;}
		nextTag[n].className = nextTag[n].className.replace( classReg( 'bye-bye' ) , ' ' );
	  }, 1200);
     i++;
	 if( i === numberOfTags){ i = 0;}
	 nextTag[i].className += " active";
    }
    setInterval(back_fn, 100);
	function back_fn(){
		if ( window.innerHeight > window.innerWidth ) {
			document.getElementById('b-img').style.height = '100%';
			document.getElementById('b-img').style.width = 'auto';
		}
	}
