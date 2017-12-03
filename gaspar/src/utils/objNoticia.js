export default function() {

      let title = "";
      let body = "";
      let date = "";
      let category = "";
      let reporter = "";
      let uid = "";

      function publicGetTitle() {
          return title;
      }

      function publicGetBody() {
          return body;
      }

      function publicGetDate() {
          return date;
      }

      function publicGetCategory() {
          return category;
      }

      function publicGetReporter() {
          return reporter;
      }

      function publicGetUid() {
          return uid;
      }

      function publicSetTitle(titulo) {
          title = titulo;
      }

      function publicSetBody(cuerpo) {
          body = cuerpo;
      }

      function publicSetDate(fecha) {
          date = fecha;
      }

      function publicSetCategory(categoria) {
          category = categoria;
      }

      function publicSetReporter(reportero) {
          reporter = reportero;
      }

      function publicSetUid(id) {
          uid = id;
      }


      return {
          setTitle: publicSetTitle,
          setBody: publicSetBody,
          setFecha: publicSetDate,
          setCategory: publicSetCategory,
          setReporter: publicSetReporter,
          setUid: publicSetUid,
          getTitle: publicGetTitle,
          getBody: publicGetBody,
          getFecha: publicGetDate,
          getCategory: publicGetCategory,
          getReporter: publicGetReporter,
          getUid: publicGetUid,
      };
  }
