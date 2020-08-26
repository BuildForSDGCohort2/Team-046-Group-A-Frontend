        // /*Toggle dropdown list*/
        // /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/
        //
        // var userMenuDiv = document.getElementById("userMenu");
        // var userMenu = document.getElementById("userButton");
        //
        // document.onclick = check;
        //
        // function check(e) {
        //     var target = (e && e.target) ;
        //
        //     //User Menu
        //     if (!checkParent(target, userMenuDiv)) {
        //         // click NOT on the menu
        //         if (checkParent(target, userMenu)) {
        //             // click on the link
        //             if (userMenuDiv.classList.contains("invisible")) {
        //                 userMenuDiv.classList.remove("invisible");
        //             } else {
        //                 userMenuDiv.classList.add("invisible");
        //             }
        //         } else {
        //             // click both outside link and outside menu, hide menu
        //             userMenuDiv.classList.add("invisible");
        //         }
        //     }
        //
        // }
        //
        // function checkParent(t, elm) {
        //     while (t.parentNode) {
        //         if (t === elm) {
        //             return true;
        //         }
        //         t = t.parentNode;
        //     }
        //     return false;
        // }
        //
        //
        //
        // //Toggle mode
        // const toggle = document.querySelector('.js-change-theme');
        // const body = document.querySelector('body');
        // const profile = document.getElementById('profile');
        //
        //
        // toggle.addEventListener('click', () => {
        //
        //   if (body.classList.contains('text-gray-900')) {
        //   toggle.innerHTML = "☀️";
        //   body.classList.remove('text-gray-900');
        //   body.classList.add('text-gray-100');
        //   profile.classList.remove('bg-white');
        //   profile.classList.add('bg-gray-900');
        //   } else
        //   {
        //   toggle.innerHTML = "🌙";
        //   body.classList.remove('text-gray-100');
        //   body.classList.add('text-gray-900');
        //   profile.classList.remove('bg-gray-900');
        //   profile.classList.add('bg-white');
        //
        //   }
        // });
