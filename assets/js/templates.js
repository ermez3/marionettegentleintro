(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contactlist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<thead>\r\n <tr>\r\n 	<th>First Name</th>\r\n 	<th>Last Name</th>\r\n 	<th></th>\r\n </tr>\r\n </thead>\r\n <tbody>\r\n</tbody>";
  });
templates['contactlistitem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>  \r\n<td>";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n<td>\r\n	<a href=\"#contacts/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-small js-show\">\r\n		<i class=\"icon-remove\"></i>\r\n		Show\r\n	</a>\r\n	<button class=\"btn btn-small js-delete\">\r\n		<i class=\"icon-remove\"></i>\r\n		Delete\r\n	</button>\r\n</td>\r\n\r\n";
  return buffer;
  });
templates['contactview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\r\n<p><strong>Phone number: ";
  if (stack1 = helpers.phoneNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phoneNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong></p>";
  return buffer;
  });
})();