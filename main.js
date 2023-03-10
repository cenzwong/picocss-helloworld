console.log("hi")


function testResults (form) {
    var inputValue = form.txtPrompt.value;
    alert ("You typed: " + inputValue);
}


function ai21_rewrite(form){
    var inputValue = form.txtPrompt.value;
    cred = "qwertyuiopjc5dvUcu1UVpWxqMcBCEUUUpFyVUrkvvkfhflkdfhaewiuhflkjahfl".substring(10, 42)

    fetch("https://api.ai21.com/studio/v1/experimental/rewrite", {
        method: 'POST',
        mode: "cors",
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer ' + cred
        },
        body: JSON.stringify({
          spanStart: 0,
          intent: 'general',
          text: inputValue
        })
      }).then(response => response.json())
      .then(response => {
        d3.select('div').selectAll('div').data(response.suggestions).enter().append('button').attr("class", "outline").attr("onClick", "copy_label(this)").text(d => d.text)
        console.log(response.suggestions)
      }

        )
      .catch(err => console.error(err));
    
}

function copy_label(btn){
    textToCopy = btn.textContent
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
}
