/**
 * Created by ur5fot on 26.11.15.
 */
document.addEventListener('DOMContentLoaded', toggleClassParent);
function toggleClassParent() {
    var tc = null ;
    document.addEventListener('click',
        function (e) {
           var t = e.target;
            if(t.classList.contains('visibleDetails')){
                t.parentNode.classList.add('videmo');
                if(tc) tc.parentNode.classList.remove('videmo');
                tc = t;
            }else  if(t.classList.contains('hiddenDetails')){
                t.parentNode.classList.remove('videmo');
            }else {
                return
            }
        }
    )
}