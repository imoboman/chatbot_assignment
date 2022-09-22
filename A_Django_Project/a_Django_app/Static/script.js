<script src="https://daiz12yp2urob.cloudfront.net/lex-web-ui-loader.min.js"></script>
<script>
  var loaderOpts = {
    baseUrl: 'https://daiz12yp2urob.cloudfront.net/',
    shouldLoadMinDeps: true
  };
  var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
  var chatbotUiConfig = {
          /* Example of setting session attributes on parent page
          lex: {
            sessionAttributes: {
              userAgent: navigator.userAgent,
              QNAClientFilter: ''
            }
          }
          */
        };
  loader.load(chatbotUiConfig)
    .catch(function (error) { console.error(error); });
</script>
