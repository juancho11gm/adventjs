import assert from 'assert';

function contains(store: any, product: string): boolean {
  if (typeof store === 'object') {
    return Object.values(store).some(item => contains(item, product));
  }

  return store === product;
}

try {
  const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }

  assert.equal(contains(almacen, 'camiseta'), true);

  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }

  assert.equal(contains(otroAlmacen, 'gameboy'), false);

} catch (error) {
  console.log(error)
}
