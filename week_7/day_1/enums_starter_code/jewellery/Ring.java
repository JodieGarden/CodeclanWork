package jewellery;

public class Ring {
  private GemType gem;
  private MetalType metal;

  public Ring(MetalType metal, GemType gem) {
    this.metal = metal;
    this.gem = gem;
  }

  public MetalType getMetal(){
    return this.metal;
  }

  public GemType getGem(){
    return this.gem;
  }

}