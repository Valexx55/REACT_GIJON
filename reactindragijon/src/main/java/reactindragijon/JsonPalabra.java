package reactindragijon;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class JsonPalabra
 */
@WebServlet("/JsonPalabra")
public class JsonPalabra extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JsonPalabra() {
        super();
        // TODO Auto-generated constructor stub
    }

    private List<Palabra> lista_palabras;
    private String lista_palabras_json;
	
	private List<Palabra> getListaPalabras ()
	{
		
		Palabra palabra1 = null;
		Palabra palabra2  = null;
		Palabra palabra3 = null;

		List<Palabra> l_palabras = null;
		
			
				
			palabra1 = new Palabra ("tierruca");
			palabra2 = new Palabra  ("yeahp");
			palabra3 = new Palabra ("Asturias");

			l_palabras = new LinkedList<Palabra>();
			
			l_palabras.add(palabra1);
			l_palabras.add(palabra2);
			l_palabras.add(palabra3);
	
		return l_palabras;
	}
	
	private String getJsonListaPalabras (List<Palabra> lista_palabras)
	{
		String str_json = null;
			
			//TODO crear string json a partir de la lista buscar ejemplo usando GSON
			Gson gson = new Gson();
			str_json = gson.toJson(lista_palabras);
			
		return str_json;
	}
	
	
	@Override
	public void init() throws ServletException {
		super.init();

		//Obtengo la lista de recados
		this.lista_palabras = getListaPalabras();
		//Serializo la lista a Json	
		this.lista_palabras_json = getJsonListaPalabras(this.lista_palabras);
	}
	
  	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		PrintWriter pw = null;
		
			response.setContentType("application/json");//seteo la respuesta
			response.setStatus(HttpURLConnection.HTTP_OK);//seteo el código http de que ha ido bien la cosa! OK = 200
			response.setHeader("Access-Control-Allow-Origin", "*");
			System.out.println("Puntuaciones como JSON = " + lista_palabras_json);
			
			pw = response.getWriter();//obtengo acceso al body
			this.lista_palabras_json = getJsonListaPalabras(this.lista_palabras);
			pw.print(this.lista_palabras_json);//y escribo la puntación
		
	}
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
			BufferedReader br = new BufferedReader(request.getReader());
			String palabra = br.readLine();//leo la linea
			
			Palabra p = new Palabra(palabra);
			lista_palabras.add(p);
			
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setContentType("text/html");
			//seteo post header
			response.setStatus(HttpURLConnection.HTTP_OK);//seteo el código http de que ha ido bien la cosa! OK = 200
			
	}
	
}
