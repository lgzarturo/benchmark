package controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import play.mvc.*;

import java.util.Optional;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index(String name) {

    	if (Optional.ofNullable(name).isEmpty()) {
    		name = "World!";
		}
    	Greeting greeting = new Greeting(name);

		return ok(play.libs.Json.toJson(greeting));
    }

}
