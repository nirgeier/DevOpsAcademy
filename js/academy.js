var submitForm = function (form) {

  var i = 0,
    fields = form && form.querySelectorAll("[name*=entry]"),
    formData = {
      type: "POST",
      data: {},
      url: "//docs.google.com/forms/d/e/1FAIpQLSf_4jvAw7Y8LaL5Qf_gMfMbxd8KsZo9CyJWE5nzQv2OpO5STw/formResponse"
    };

  // Loop over the fields and collect them
  fields.forEach(function (element) {
    formData.data[element.name] = element.value;
  });

  console.log(formData);
  // Send the form to Google drive
  ajax(formData);

  // Disable the submit of the form
  return false;
};

function ajax(formData) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", formData.url);
  console.log(JSON.stringify(formData.data));
  xhr.send(JSON.stringify(formData.data));
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.querySelector('.topNav')
  .addEventListener('click', function () {
    document.querySelector('.navItems').classList.toggle('hide');
  });

window.addEventListener("hashchange", function () {
  if (window.innerWidth > 1200) {
    scrollBy(0, -118)
  } else if (window.innerWidth < 1200 && window.innerWidth > 960) {
    scrollBy(0, -94)
  }
})