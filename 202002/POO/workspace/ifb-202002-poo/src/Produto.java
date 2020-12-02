public class Produto 
{
    private String nome;
    private float preco;
    private int quantidade;    

    public Produto(String nome, float preco, int quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public void setPreco(float preco){
        this.preco = preco;
    }

    public float getPreco(){
        return preco;
    }

    public void setQuantidade(int quantidade){
        this.quantidade = quantidade;
    }

    public float getQuantidade(){
        return preco;
    }
}
