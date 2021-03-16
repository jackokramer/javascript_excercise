<script>
$('.qty-input').on('change', function(){
var prev = $(this).data('val');
var current = $(this).val();
setTimeout(function() {
if (prev != current){
$( "#cart_update" ).trigger( "click" );
}
}, 500);
});
</script>