name_of_guest_array = [];

function submit() {
    var name_1 = document.getElementById("name_of_guest_1").value;
    var name_2 = document.getElementById("name_of_guest_2").value;
    var name_3 = document.getElementById("name_of_guest_3").value;
    var name_4 = document.getElementById("name_of_guest_4").value;
    var name_5 = document.getElementById("name_of_guest_5").value;
    var name_6 = document.getElementById("name_of_guest_6").value;
    var name_7 = document.getElementById("name_of_guest_7").value;

    name_of_guest_array.push(name_1);
    name_of_guest_array.push(name_2);
    name_of_guest_array.push(name_3);
    name_of_guest_array.push(name_4);
    name_of_guest_array.push(name_5);
    name_of_guest_array.push(name_6);
    name_of_guest_array.push(name_7);

    console.log(name_of_guest_array);
    console.log(name_of_guest_array.length)

    document.getElementById("display_name").innerHTML = name_of_guest_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "block";
}

function sorting() {
    name_of_fruit_array.sort();
    console.log(name_of_guestt_array);
    document.getElementById("display_name").innerHTML = name_of_guest_array;
}