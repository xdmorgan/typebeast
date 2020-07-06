const { get } = require('./get-typography')
const mox = {
  default: require('../mocks/minimum.json'),
  kitchenSink: require('../mocks/kitchen-sink.json'),
}

test('write wysiwyg spacing rules for minimum config', async () => {
  expect(get(mox.default)).toMatchInlineSnapshot(`
    Object {
      "mixins": "",
      "typography": "",
    }
  `)
})

test('write wysiwyg spacing rules for kitchen sink config', async () => {
  expect(get(mox.kitchenSink)).toMatchInlineSnapshot(`
    Object {
      "mixins": "// h1-xxl
    // ---------------------------------------------------------

    @mixin type-h1-xxl-default(
      $family: Poppins,
      $letter: -0.0125em,
      $line: 46.2,
      $size: 42,
      $style: null,
      $transform: null,
      $weight: normal
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h1-xxl-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 80,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h1-xl
    // ---------------------------------------------------------

    @mixin type-h1-xl-default(
      $family: Poppins,
      $letter: -0.0125em,
      $line: 39.6,
      $size: 36,
      $style: null,
      $transform: null,
      $weight: normal
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h1-xl-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 64,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h1
    // ---------------------------------------------------------

    @mixin type-h1-default(
      $family: Poppins,
      $letter: -0.0125em,
      $line: 35.2,
      $size: 32,
      $style: null,
      $transform: null,
      $weight: normal
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h1-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 48,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h2
    // ---------------------------------------------------------

    @mixin type-h2-default(
      $family: Poppins,
      $letter: null,
      $line: 30.8,
      $size: 28,
      $style: null,
      $transform: null,
      $weight: normal
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h2-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 32,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h3
    // ---------------------------------------------------------

    @mixin type-h3-default(
      $family: Poppins,
      $letter: null,
      $line: 22,
      $size: 20,
      $style: null,
      $transform: null,
      $weight: normal
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h3-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 24,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h4
    // ---------------------------------------------------------

    @mixin type-h4-default(
      $family: Poppins,
      $letter: null,
      $line: 19.2,
      $size: 16,
      $style: null,
      $transform: null,
      $weight: bold
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h4-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 20,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h5
    // ---------------------------------------------------------

    @mixin type-h5-default(
      $family: Poppins,
      $letter: null,
      $line: 15.6,
      $size: 13,
      $style: null,
      $transform: null,
      $weight: bold
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h5-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 16,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // h6
    // ---------------------------------------------------------

    @mixin type-h6-default(
      $family: null,
      $letter: null,
      $line: 12,
      $size: 10,
      $style: null,
      $transform: uppercase,
      $weight: bold
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-h6-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 12,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // lede
    // ---------------------------------------------------------

    @mixin type-lede-default(
      $family: null,
      $letter: null,
      $line: 27,
      $size: 18,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-lede-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 24,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // para
    // ---------------------------------------------------------

    @mixin type-para-default(
      $family: null,
      $letter: null,
      $line: 27.2,
      $size: 16,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-para-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 18,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // small
    // ---------------------------------------------------------

    @mixin type-small-default(
      $family: null,
      $letter: null,
      $line: 23.8,
      $size: 14,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-small-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 16,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // ui
    // ---------------------------------------------------------

    @mixin type-ui-default(
      $family: null,
      $letter: null,
      $line: 18.2,
      $size: 13,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-ui-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 14,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    // caption
    // ---------------------------------------------------------

    @mixin type-caption-default(
      $family: null,
      $letter: null,
      $line: 15,
      $size: 10,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }

    @mixin type-caption-large(
      $family: null,
      $letter: null,
      $line: null,
      $size: 12,
      $style: null,
      $transform: null,
      $weight: null
    ) {
      @include typebeast(
        $family,
        $letter,
        $line,
        $size,
        $style,
        $transform,
        $weight
      );
    }
    ",
      "typography": ".type-h1-xxl {
      @include type-h1-xxl-default;
    }

    .type-h1-xl {
      @include type-h1-xl-default;
    }

    .type-h1,
    .wysiwyg h1 {
      @include type-h1-default;
    }

    .type-h2,
    .wysiwyg h2 {
      @include type-h2-default;
    }

    .type-h3,
    .wysiwyg h3 {
      @include type-h3-default;
    }

    .type-h4,
    .wysiwyg h4 {
      @include type-h4-default;
    }

    .type-h5,
    .wysiwyg h5 {
      @include type-h5-default;
    }

    .type-h6,
    .wysiwyg h6 {
      @include type-h6-default;
    }

    .type-lede,
    .wysiwyg.with-lede > p:first-child,
    .wysiwyg blockquote > p {
      @include type-lede-default;
    }

    .type-para,
    .wysiwyg p,
    .wysiwyg ul,
    .wysiwyg ol,
    .wysiwyg dl {
      @include type-para-default;
    }

    .type-small,
    .wysiwyg small {
      @include type-small-default;
    }

    .type-ui {
      @include type-ui-default;
    }

    .type-caption,
    .wysiwyg figcaption {
      @include type-caption-default;
    }

    @media screen and (min-width: 768px) {
      .type-h1-xxl {
        @include type-h1-xxl-large;
      }

      .type-h1-xl {
        @include type-h1-xl-large;
      }

      .type-h1,
      .wysiwyg h1 {
        @include type-h1-large;
      }

      .type-h2,
      .wysiwyg h2 {
        @include type-h2-large;
      }

      .type-h3,
      .wysiwyg h3 {
        @include type-h3-large;
      }

      .type-h4,
      .wysiwyg h4 {
        @include type-h4-large;
      }

      .type-h5,
      .wysiwyg h5 {
        @include type-h5-large;
      }

      .type-h6,
      .wysiwyg h6 {
        @include type-h6-large;
      }

      .type-lede,
      .wysiwyg.with-lede > p:first-child,
      .wysiwyg blockquote > p {
        @include type-lede-large;
      }

      .type-para,
      .wysiwyg p,
      .wysiwyg ul,
      .wysiwyg ol,
      .wysiwyg dl {
        @include type-para-large;
      }

      .type-small,
      .wysiwyg small {
        @include type-small-large;
      }

      .type-ui {
        @include type-ui-large;
      }

      .type-caption,
      .wysiwyg figcaption {
        @include type-caption-large;
      }
    }
    ",
    }
  `)
})
