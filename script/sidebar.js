
        // sidebar

        function Open_Drawer() {
            document.querySelector(".Sidebar_Content").style.width = "200px";
            document.querySelector(".blur_overlay").style.display = "block";
        }
        function Close_Drawer() {
            document.querySelector(".Sidebar_Content").style.width = "0px"
            document.querySelector(".blur_overlay").style.display = "None";
        }