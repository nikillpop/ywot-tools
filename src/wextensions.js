/* Note about function naming conventions:
 *     - functions with the word 'do' in front of them
 *           (for example, doGoToCartesian) actually move
 *           the cursor to the respective location. This
 *           is the 'older' way of doing things.
 *     - functions without 'do' do not actually show up
 *           in the UI. They are abstracted away and are
 *           used in caching.  For example, goToCartesian
 *           will not move the cursor.  It just tells this
 *           prototype where to add the next character
 *           in the cache.
 */

function WorldExtensions() {
    this.world = window.w;
    this.width = this.world._config.numCols();
    this.height = this.world._config.numRows();
    this.tileX = 0;
    this.tileY = 0;
    this.charX = 0;
    this.charY = 0;

    // We enforce a commit ratelimit of MAXEDITS per DELAY
    // This ensures that our request will be correctly processed,
    // our request will not be strenuous on the server (this is
    // unlikely anyways, but safeguards are nice), and we discourage
    // this script from being abused as spam
    this.MAXEDITS = this.width*this.height; // one tile per commit
    this.DELAY = 2000 // milliseconds
    this.queue = [];
    this.go = true;

    this.msg = atob("RW1haWwgbWUgYmVmb3JlIHNjcmlwdGluZw==");

    // This does a proper mathematical mod reduction based on the property that,
    // for any integer n, given that
    //      a = k (mod b)
    // then
    //      a+b*n = k (mod b)
    // JavaScript's mod operator does not have this property by default, but rather
    // has a shitty property where
    //      -a = a (mod b)
    // which makes the function even, which is useless in modular arithmetic.
    this.mod = function(a,b) {
        if(a>0) {
            return a%b;
        } else {
            if(a%b != 0) {
                return a%b+b;
            } else {
                return 0;
            }
        }
    }

    // The following two functions abstract away the tile-based coordinate system
    // which, although necessary for an infinite grid data structure, can be tricky
    // to work with. We do not work directly with that structure so we can just use
    // a universal coordinate system which is easier to understand.

    this.goToCartesian = function(x, y) {
        this.charX = this.mod(x, this.width);
        this.charY = this.mod(y, this.height);
        this.tileX = Math.floor(x/this.width);
        this.tileY = Math.floor(y/this.height);
    }

    this.getCartesian = function() {
        return [this.tileX*this.width+this.charX,
                this.tileY*this.height+this.charY];
    }

    // This moves the virtual cursor to the screen cursor
    this.goToCursor = function() {
        var pos = this.doGetCartesian();
        this.goToCartesian(pos[0], pos[1]);
    }

    // Remember the naming convention... this actually
    // gets the current position of the cursor on the screen,
    // NOT the internal virtual cursor
    this.doGetCartesian = function() {
        var _ref = Helpers.getCellCoords(this.world._state.selected);
        return [_ref[1]*this.width+_ref[3],
                _ref[0]*this.height+_ref[2]];
    }

    // Type a character at the current location
    this.typeText = function(character) {
        assert(typeof(character)==="string" && character.length===1);
        this.queue.push([
            this.tileY,
            this.tileX,
            this.charY,
            this.charX,
            Date.now(),
            character,
            this.msg
        ])
    }

    // Convenient naviagtional function
    this.move = function(direction) {
        var x = 0;
        var y = 0;
        var pos;
        switch(direction) {
            case "down":
                y = 1;
                break;
            case "up":
                y = -1;
                break;
            case "left:":
                x = -1;
                break;
            case "right":
                x = 1;
                break;
            default:
                throw("Bad Direction");
        }
        pos = this.getCartesian();
        this.goToCartesian(pos[0]+x, pos[1]+y);
    }

    // Send out chunks from the queue at rate limit
    this.commit = function() {
        // TODO: commit shit
        // ...
        if(this.go) {
            var that = this;
            setTimeout(
                function() {
                    that.commit();
                },
                that.DELAY
            );
        }
    }

    // Stop committing
    // Returns false if already stopped, true otherwise
    this.stop = function() {
        if(this.go) {
            this.go = false;
            this.queue = [];
            return true;
        } else {
            return false;
        }
    }

    // Resume committing
    // Returns false if already started, true otherwise
    this.start = function() {
        if(!this.go) {
            this.go = true;
            this.commit();
            return true;
        } else {
            return false;
        }
    }

    /* Begin */
    this.commit();

}

var we = new WorldExtensions();