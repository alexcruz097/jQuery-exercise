const submitBTN = $("#submit-btn");
let movieInput = $("#movie-name");
let movieRating = $("#movie-rating");
let movieOrder = $("#rating-list ol");
let sortVal = $("#sort");
const movieOBJ = [];
submitBTN.on("click", function () {
  if (movieInput.val().length >= 2) {
    movieOrder.append(`
        <p>Name: ${movieInput.val()} Rating: ${movieRating.val()} <button class="remove">Delete</button></p>
        `);

    // push info to new obj
    movieOBJ.push({
      name: movieInput.val(),
      rating: movieRating.val(),
    });

    console.log(movieOBJ);
    // clear out the input
    movieInput.val("");
    movieRating.val("");
  } else {
    alert("Name has to be greater than 3");
  }
});

// delete rating and title
$("body").on("click", function (e) {
  // check if button is click
  if ($(e.target).hasClass("remove")) {
    $(e.target).parent().remove();
  }
});

function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

// sorting
sortVal.on("change", function () {
  switch ($(this).val()) {
    // alphabetical accent
    case "alpha-asc":
      movieOBJ.sort(compareValues("name"));
      // clear movie rating
      movieOrder.children().remove();
      console.log(movieOBJ)
      // iterate thru array
      for (const prop in movieOBJ) {
        // push to div
        movieOrder.append(`
        <p>Name: ${movieOBJ[prop].name} Rating: ${movieOBJ[prop].rating} <button class="remove">Delete</button></p>
        `);
      }
      break;
          // alphabetical accent
    case "alpha-desc":
      movieOBJ.sort(compareValues("name", "desc"));
      // clear movie rating
      movieOrder.children().remove();
      console.log(movieOBJ)

      // iterate thru array
      for (const prop in movieOBJ) {
        // push to div
        movieOrder.append(`
        <p>Name: ${movieOBJ[prop].name} Rating: ${movieOBJ[prop].rating} <button class="remove">Delete</button></p>
        `);
      }
      // code block
      break;
    case "num-asc":
      movieOBJ.sort(compareValues("rating"));
      // clear movie rating
      movieOrder.children().remove();
      // iterate thru array
      for (const prop in movieOBJ) {
        // push to div
        movieOrder.append(`
        <p>Name: ${movieOBJ[prop].name} Rating: ${movieOBJ[prop].rating} <button class="remove">Delete</button></p>
        `);
      }
      // code block
      break;
    case "num-desc":
      // code block
      movieOBJ.sort(compareValues("rating", "desc"));
      // clear movie rating
      movieOrder.children().remove();
      // iterate thru array
      for (const prop in movieOBJ) {
        // push to div
        movieOrder.append(`
        <p>Name: ${movieOBJ[prop].name} Rating: ${movieOBJ[prop].rating} <button class="remove">Delete</button></p>
        `);
      }
      break;
    default:
    // code block
  }
});
