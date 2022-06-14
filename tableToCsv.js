tableToCSV() {
      var csv_data = [];
      var rows = document.getElementsByTagName("tr");

      for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll("td,th");
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
          csvrow.push(cols[j].textContent.trim()); //remove \n and white spaces
        }
        csv_data.push("\n" + csvrow.join(",")); // add \n for new entry comes new line
      }

      this.downloadCSVFile(csv_data);
    },

    downloadCSVFile(csv_data) {
      let CSVFile = new Blob([csv_data], { type: "text/csv" });
      var temp_link = document.createElement("a");
      temp_link.download = "bookings.csv";
      var url = window.URL.createObjectURL(CSVFile);
      temp_link.href = url;
      temp_link.style.display = "none";
      document.body.appendChild(temp_link);
      temp_link.click();
      document.body.removeChild(temp_link);
    },
