/**
 * Strategy
 *
 * - strategy vs state
 *
 * - state - a single state, functionality that is invokes in the concrete classes
 *          - the context/main class is a mirror of the abstract and concrete classes
 * - strategy - multiple state, different behaviors are represented as strategy objects
 *          - functionality of the context/main class is different from the concrete classes
 *          - the states are representations of the different strategy objects
 */

// class ImageStorage {
//   // JPGEG, PNG -> compression
//   // B&W, High Contrast -> filter

//   // violating single responsibility principle
//   // not only saving the image but also compressing and applying filter
//   // also difficult to add new filters and compressors

//   // apply polymorphism principle depending on types of compression/filter used
//   // following open/close principle

//   constructor() {
//     this.compressor = null;
//     this.filter = null;
//   }

//   store(fileName) {
//     if (this.compressor === "PNG") {
//       console.log("Compressing using png");
//     } else if (this.compressor === "JPEG") {
//       console.log("Compressing using jpeg");
//     }

//     if (this.filter === "B&W") {
//       console.log("...");
//     } else if (this.filter === "High Contrast") {
//       //...
//     }
//   }
// }

// example

class Compressor {
  // abstract
  compress(fileName) {}
}

class PNGCompressor extends Compressor {
  compress(fileName) {
    console.log("compressing using png");
  }
}

class JPEGCompressor extends Compressor {
  compress(fileName) {
    console.log("compressing using jpeg");
  }
}

class Filter {
  // abstract
  apply(fileName) {}
}

class BWFilter extends Filter {
  apply(fileName) {
    console.log("applying B&W");
  }
}

class HighContrastFilter extends Filter {
  apply(fileName) {
    console.log("applying high contrast");
  }
}

class ImageStorage {
  constructor(compressor, filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  store(fileName) {
    this.compressor.compress(fileName);
    this.filter.apply(fileName);
  }
}

const imageStorage = new ImageStorage(new JPEGCompressor(), new BWFilter());
imageStorage.store("a");
