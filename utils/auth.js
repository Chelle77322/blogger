const withAuth = (request, result, next) => {
    if (!request.session.userId) {
      result.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;