var survey_options = document.getElementById('survey_options')
var add= document.getElementById('add_fields')
var remove= document.getElementById('remove_fields')


add.onclick = function(){
    var field = document.createElement('input');
    var tags = survey_options.getElementsByTagName('input')
    field.setAttribute('type','text');
    field.setAttribute('name','survey_options')
    field.setAttribute('class','survey_options')
    field.setAttribute('size','50');
    survey_options.appendChild(field);
    if(tags.length>2){
        document.getElementById('remove_fields').style.visibility="visible"
    }
}
remove.onclick = function(){
    var tags = survey_options.getElementsByTagName('input');
    console.log(tags)
    if(tags.length>=2){
        survey_options.removeChild(tags[(tags.length)-1]);
        if(tags.length<2){
            document.getElementById('remove_fields').style.visibility="hidden"
        }
    }
}
