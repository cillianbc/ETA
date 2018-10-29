<?php /* Template Name: ETA page */ 
get_header(); ?>


  <h1 align="center">Expanded Text Ads Preview Tool</h1>

  <div class="row">
    <div class="col-lg-12 col-md-12">
      <form role="form">
        <div class="form-group">
          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Final URL</span><input id="finalurl" name=
              "finalurl" placeholder="Final URL" class="form-control" />
            </div>
          </div>

          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Headline 1</span><input id="headline1"
              name="headline1" placeholder="Headline 1" class="form-control" />
              <span class="input-group-addon"><span id="headline1_count_message" class=
              "pull-right">30</span></span>
            </div>
          </div>

          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Headline 2</span><input id="headline2"
              name="headline2" placeholder="Headline 2" class="form-control" />
              <span class="input-group-addon"><span id="headline2_count_message" class=
              "pull-right">30</span></span>
            </div>
          </div>
          
          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Headline 3</span><input id="headline3"
              name="headline3" placeholder="Headline 3" class="form-control" />
              <span class="input-group-addon"><span id="headline3_count_message" class=
              "pull-right">30</span></span>
            </div>
          </div>

          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Description</span>
              <textarea id="description" name="description" placeholder="Description"
              class="form-control">
</textarea> <span class="input-group-addon"><span id="description_count_message"
              class="pull-right">80</span></span>
            </div>
          </div>

          <div class="controls">
            <div class="input-group header">
              <span class="input-group-addon">Path 1</span><input id="path1" name="path1"
              placeholder="Path1" class="form-control" /> <span class=
              "input-group-addon"><span id="path1_count_message" class=
              "pull-right">15</span></span> <span class=
              "input-group-addon spacer">/</span> <span class="input-group-addon">Path
              2</span><input id="path2" name="path2" placeholder="Path2" class=
              "form-control" /> <span class="input-group-addon"><span id=
              "path2_count_message" class="pull-right">15</span></span>
            </div>
          </div>
        </div>
      </form><!-- /col-md-6-->
    </div>

    <div class="col-lg-12 col-md-12">
      <div class="row">
        <div class="Device">
          <p>Desktop</p>

          <div class="Desktop">
            <a href="" class="headline ng-binding"><span id="Desktop_Headline1" class="headline">Headline 1</span> <span id="Desktop_Headline2" class="headline">| Headline 2</span><span id="Desktop_Headline3" class="headline"> | Headline 3</span></a><br />
            <span class="AdIcon">Ad</span> <span id="Desktop_finalurl" class=
            "finalurl">www.example.com</span><br />
            <span id="Desktop_description" class="description">Description</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="Device">
          <p>Mobile</p>

          <div class="col-lg-6 col-md-6 Mobile">
            <div class="MobileTop">
              <a href="" class="headline ng-binding"><span id="Mobile_Headline1" class="mobiletopheadline">Headline 1</span><span id="Mobile_Headline2" class="mobiletopheadline"> | Headline 2</span><span id="Mobile_Headline3" class="mobiletopheadline"> | Headline 3</span></a><br />
              <span class="AdIcon">Ad</span> <span id="Mobile_finalurl" class=
              "finalurl">www.example.com</span>
            </div>

            <div class="MobileDivider"></div>

            <div class="MobileBottom">
              <span id="Mobile_description" class="description">Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
    <?php 
    $img_middle = get_field('img_middle'); 
    $img_left = get_field('img_left');
    $img_right = get_field('img_right'); 
    ?>
      <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
        <ul class="social">
          <li><a href="https://github.com/cillianbc"><img src="<?php  echo $img_left['url'] ?>"</a></a></li>
          <li><a href="https://www.linkedin.com/in/cillianbc"><img src="<?php echo $img_middle['url'] ?>"</a></a></li>
          <li><a href="https://twitter.com/cillianbc"><img src="<?php echo $img_right['url'] ?>"</a></a></li>
        </ul>
      </div>
    </footer>
  </div>
<?php get_footer();