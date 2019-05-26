import React from 'react';
import { css } from 'emotion';
import { connect } from 'react-redux';
import { Row, Col, Input, Button} from 'reactstrap';
import Localized from 'components/Localized/Localized';
import LocationsCount from 'components/LocationsCount/LocationsCount';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { selectAllLocationsAction, deselectAllLocationsAction } from 'actions/config';

import DefaultLocationsList from './DefaultLocationsList';
import CustomLocationsList from './CustomLocationsList';

export const Settings = (props) => {
  const { t, selectAllLocations, deselectAllLocations } = props;

  return (
    <Row className={`${styles.container} justify-content-center`}>
      <Col xs={12} md={10}>
        <Row className={styles.locationsContainer}>
          <Col className="text-center">
            <h4><Localized name="interface.game_locations" /> (<LocationsCount />)</h4>
          </Col>
        </Row>
        <Row className={`${styles.filterContainer} justify-content-center`}>
          <Col className="text-center">
            <Input placeholder={t('interface.filter')} />
          </Col>
        </Row>
        <DefaultLocationsList version={1} onSelectAll={selectAllLocations} onDeselectAll={deselectAllLocations} />
        <DefaultLocationsList version={2} onSelectAll={selectAllLocations} onDeselectAll={deselectAllLocations} />
        <CustomLocationsList onSelectAll={selectAllLocations} onDeselectAll={deselectAllLocations} />
        <Row className={`${styles.backContainer} justify-content-center`}>
          <Col xs={12} className="text-center">
            <Link className={styles.backLink} to="/">
              <Button color="danger" block><Localized name="interface.back_to_game" /></Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const styles = {
  container: css({
    marginBottom: 50,
  }),
  locationsContainer: css({
    marginTop: 20,
  }),
  filterContainer: css({
    marginTop: 20,
  }),
  backContainer: css({
    marginTop: 20,
  }),
  backLink: css({
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'none',
    },
  }),
};

const mapDispatchToProps = (dispatch) => ({
  selectAllLocations: (locationsIds) => dispatch(selectAllLocationsAction(locationsIds)),
  deselectAllLocations: (locationsIds) => dispatch(deselectAllLocationsAction(locationsIds)),
});

export default withNamespaces()(
  connect(null, mapDispatchToProps)(Settings)
);
