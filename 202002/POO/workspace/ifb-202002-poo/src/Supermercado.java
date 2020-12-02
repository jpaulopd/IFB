import java.util.List;

public class Supermercado
{
    private String nome;
    private List<Produto> listaProdutos = new List<Produto>();

    public Supermercado(String nome) {
        this.nome = nome;
    }    

    public List<Produto> getListaProdutos(){
        return listaProdutos;
    }

    public void setListaProdutos(Produto produto){
        listaProdutos.add(produto);
    }

    public String getNome(){
        return nome;
    }


}
