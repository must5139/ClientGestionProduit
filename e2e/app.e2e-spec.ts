import { ClientGestionProduitPage } from './app.po';

describe('client-gestion-produit App', function() {
  let page: ClientGestionProduitPage;

  beforeEach(() => {
    page = new ClientGestionProduitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
